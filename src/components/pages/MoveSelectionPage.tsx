//import types
import type { MoveSelectionPageProps } from "../../../lib/types";

//import move icon component
import RockIcon from "../move-icons/RockIcon";
import PaperIcon from "../move-icons/PaperIcon";
import ScissorsIcon from "../move-icons/ScissorsIcon";

export default function MoveSelector({
  setIsMoveSelected,
  setPlayerMove,
}: MoveSelectionPageProps) {
  return (
    <div className="flex">
      <div className="border">
        <PaperIcon
          setIsMoveSelected={setIsMoveSelected}
          setPlayerMove={setPlayerMove}
        />
        <ScissorsIcon
          setIsMoveSelected={setIsMoveSelected}
          setPlayerMove={setPlayerMove}
        />
      </div>
      <div>
        <RockIcon
          setIsMoveSelected={setIsMoveSelected}
          setPlayerMove={setPlayerMove}
        />
      </div>
    </div>
  );
}
