import { CountryList } from "../data";
import { Radio } from "./Radio";

export const CountryRadioGroup = ({ onSelect, active }: any) => {
  return (
    <div>
      <label className="text-xs">Country*</label>
      <div className="flex flex-row">
        {Object.keys(CountryList).map((source: string) => (
          <Radio
            active={source === active}
            key={source}
            onSelect={() => onSelect(source)}
            className="flex-row p-2 items-center"
          >
            <img width={24} src={CountryList[source].source} />
            <p className="ml-2 text-sm">{CountryList[source].name}</p>
          </Radio>
        ))}
      </div>
    </div>
  );
};
