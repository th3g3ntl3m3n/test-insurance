export const Radio = ({
  children,
  active,
  onSelect,
  className,
}: {
  children: any;
  active: boolean;
  onSelect: () => null;
  className: string;
}) => {
  let style = active
    ? `border border-2 border-blue-400 shadow-lg shadow-blue-200`
    : "border-2 border-transparent";

  let commonStyles = "cursor-pointer hover:shadow-lg flex-1 flex";
  return (
    <div
      className={[commonStyles, className, style].join(" ")}
      onClick={onSelect}
    >
      {children}
    </div>
  );
};
