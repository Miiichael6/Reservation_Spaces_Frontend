import HomeHeader from "./infrastructure/templates/HomeHeader";
import InfoUserCard from "./infrastructure/templates/InfoUserCard";
import InfoSlotsReservation from "./infrastructure/templates/InfoSlotsReservation";
import "./infrastructure/css/index.css";

export const DashBoardScreen = () => {
  return (
    <div className="grid grid-cols-9 grid-rows-6 gap-4 h-[100vh] bg-cyan-700 overflow-hidden">
      <div className="col-span-2 row-span-3 col-start-2">
        <InfoUserCard />
      </div>
      <div className="col-span-5 row-span-6 col-start-4">
        <InfoSlotsReservation />
      </div>
      <div className="col-span-2 row-span-3 col-start-2 row-start-4">
        <HomeHeader />
      </div>
    </div>
  );
};
