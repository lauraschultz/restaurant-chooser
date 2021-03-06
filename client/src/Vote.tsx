import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "./VotingIcons";
import { UserContext } from "./UserDataContext";
import Corner from "./assets/corner.svg";

const Vote: React.FC<{
	addVote: Function;
	currentVote: number | undefined;
}> = ({ addVote, currentVote }) => {
	const { userState } = useContext(UserContext);
	if (userState === "canView") {
		return null;
	}
	return (
		<form
			className="flex items-center justify-center"
			onSubmit={(e) => e.preventDefault()}
		>
			<span className="text-gray-800 tracking-wide font-bold italic uppercase mr-2">
				vote:
			</span>
			{icons.map((i, idx) => (
				<button
					key={idx}
					className="p-xs m-xs btn-focus rounded-full"
					onClick={() => addVote(idx)}
					aria-label={i.descText}
					data-balloon-pos="down"
				>
					<div className="leading-none bg-gray-50 rounded-full">
						<FontAwesomeIcon className={i.color} icon={i.icon} size="2x" />
					</div>
					<div className={currentVote === idx ? "" : "hidden"}>
						<img src={Corner} className="absolute top-0 left-0" alt="" />
						<img
							src={Corner}
							className="absolute top-0 right-0 transform rotate-90"
							alt=""
						/>
						<img
							src={Corner}
							className="absolute bottom-0 right-0 transform rotate-180"
							alt=""
						/>
						<img
							src={Corner}
							className="absolute bottom-0 left-0 transform -rotate-90"
							alt=""
						/>
					</div>
				</button>
			))}
		</form>
	);
};

export default Vote;
