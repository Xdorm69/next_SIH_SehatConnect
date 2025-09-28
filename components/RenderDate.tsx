const RenderDate = ({date}: {date: Date | string}) => {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

export default RenderDate;