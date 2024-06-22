import { format, addMonths, addYears } from "date-fns";

const generateSubscriptionDates = (planDuration) => {
  let free = false;
  const currentDate = new Date();
  let endDate;
  if (!planDuration) {
    const startDate = format(currentDate, "yyyy-MM-dd");
    endDate = format(addMonths(currentDate, 3), "yyyy-MM-dd");
    return {
      startDate: startDate,
      endDate: endDate,
      transactionDate: null,
      isFree: true,
    };
  }
  switch (planDuration.toLowerCase()) {
    case "6 months":
      endDate = addMonths(currentDate, 6);
      break;
    case "3 months":
      endDate = addMonths(currentDate, 3);
      break;
    case "1 year":
      endDate = addYears(currentDate, 1);
      break;
    default:
      free = true;
      break;
  }
  const startDate = format(currentDate, "yyyy-MM-dd");
  const formattedEndDate = format(endDate, "yyyy-MM-dd");
  const transactionDate = startDate;

  return {
    startDate,
    endDate: formattedEndDate,
    transactionDate,
    isFree: false,
  };
};

export { generateSubscriptionDates };
