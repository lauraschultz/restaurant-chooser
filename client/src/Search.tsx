import React, { useState, FormEvent } from "react";
import { Business } from "./YelpInterfaces";
import Vote from "./Vote";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faCircleNotch,
  faInfoCircle,
  faMapPin,
  faPlus,
  faSearch,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import DisplayItem from "./DisplayItem";
import socket from "./socket";
import Filters from "./Filters";
import AddRestaurantButton from "./AddRestaurantButton";

const DisplaySearchResults: React.FC<{
  businesses: Business[];
  voteOnRestaurant: Function;
  isAdded: { [id: string]: boolean };
  sessionId: string;
  userId: string;
  userState: string;
}> = ({
  businesses,
  voteOnRestaurant,
  isAdded,
  sessionId,
  userId,
  userState,
}) => {
  return (
    <ul className="divide-y divide-theme-extra-light-gray">
      {businesses.map((b) => (
        <li key={b.id}>
          <DisplayItem
            restaurant={{ business: b, votes: [] }}
            addRestaurant={<AddRestaurantButton isRestaurantsAdded={isAdded[b.id]} userState={userState} sessionId={sessionId} userId={userId} businessId={b.id}/>}
            vote={
              isAdded[b.id] ? (
                <Vote
                  currentVote={undefined}
                  addVote={(v: number) => voteOnRestaurant(b.id, v)}
                />
              ) : null
            }
          />
        </li>
      ))}
    </ul>
  );
};

export type FilterResults = {
  openHours: "any" | "today" | "now";
  priceRange: string;
  services: string;
};

const Search: React.FC<{
  sessionId: string;
  userId: string;
  location: string;
  creatorName: string;
  userState: string;
  voteOnRestaurant: Function;
  isAdded: { [id: string]: boolean };
}> = ({
  sessionId,
  userId,
  location,
  creatorName,
  userState,
  voteOnRestaurant,
  isAdded,
}) => {
  let [searchTerm, setSearchTerm] = useState("");
  let [businesses, setBusinesses] = useState(new Array<Business>());
  let [loadingSearch, setLoadingSearch] = useState(false);
  let [filterResults, setFilterResults] = useState<FilterResults>();

  return (
    <div className="max-w-md w-full mx-auto">
      <h2 className="max-w-md mx-auto text-2xl px-1 text-theme-dark-gray font-display leading-none mb-1">
        Search
      </h2>
      <hr className="border-theme-extra-light-gray" />
      <form
        className="p-2 w-full"
        onSubmit={(e: FormEvent) => {
          e.preventDefault();
          setLoadingSearch(true);
          setBusinesses([]);
          socket
            .search(
              sessionId,
              searchTerm,
              filterResults?.openHours || "",
              filterResults?.priceRange || "",
              filterResults?.services || ""
            )
            .then((b: Business[]) => {
              setBusinesses(b);
              setLoadingSearch(false);
            })
            .catch((e) => console.log(`oopsies ${e}`));
        }}
      >
        <div className="text-theme-light-gray italic -mt-1 mb-1">
          {creatorName} set the location to{" "}
          <span className="uppercase text-sm font-bold">
            {location}
            <button
              type="button"
              aria-label="Search results will not be strictly within this area; it serves as a starting point."
              data-balloon-pos="down"
              data-balloon-length="medium"
            >
              <FontAwesomeIcon icon={faInfoCircle} className="ml-1" />
            </button>
          </span>
        </div>
        <input
          className="rounded py-1 px-2 shadow"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        ></input>
        <button
          className="shadow py-1 px-2 ml-2 text-white bg-theme-blue rounded-full"
          type="submit"
        >
          <FontAwesomeIcon aria-label="search" icon={faSearch} />
        </button>
        <Filters
          update={(r: FilterResults) => {
            console.log(`filter sent: ${JSON.stringify(r)}`);
            setFilterResults(r);
          }}
        />
      </form>
      {loadingSearch && (
        <FontAwesomeIcon
          icon={faCircleNotch}
          size="5x"
          className="animate-spin text-theme-yellow mx-auto my-4 block"
        />
      )}
      <DisplaySearchResults
        businesses={businesses}
        voteOnRestaurant={voteOnRestaurant}
        isAdded={isAdded}
        sessionId={sessionId}
        userId={userId}
        userState={userState}
      />
    </div>
  );
};

export default Search;
