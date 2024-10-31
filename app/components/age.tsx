import {
  addMonths,
  addYears,
  differenceInDays,
  differenceInMonths,
  differenceInYears,
  parseISO,
} from "date-fns";

type Props = {
  death: string;
  birth: string;
};

const EarthAge = ({ birth, death }: Props) => {
  const years = differenceInYears(death, birth);
  const adjustedYears = addYears(birth, years);
  const months = differenceInMonths(death, adjustedYears);
  const adjustedMonths = addMonths(adjustedYears, months);
  const days = differenceInDays(death, adjustedMonths);
  return (
    <div className="grid grid-cols-2 gap-4">
      <p className="text-right">My heaven age is:</p>
      <div className="text-left">
        <p>{years} year(s)</p>
        <p>{months} month(s)</p>
        <p>{days} days(s)</p>
      </div>
    </div>
  );
};

const HeavenAge = ({ birth, death }: Props) => {
  const DAYS_IN_YEARS = 365.2425;
  const earthSeconds =
    (parseISO(death).getTime() - parseISO(birth).getTime()) / 1000;
  const seconds = earthSeconds / 1000 / DAYS_IN_YEARS;
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  return (
    <div className="grid grid-cols-2 gap-4 p-2">
      <p className="text-right">My earth age is:</p>
      <div className="text-left">
        <p>{hours} hour(s)</p>
        <p>{minutes} minute(s)</p>
        <p>{Math.round(seconds % 60)} second(s)</p>
      </div>
    </div>
  );
};

export { EarthAge, HeavenAge };
