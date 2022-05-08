import { PackageList } from "../data";
import { Radio } from "./Radio";

export const PackageRadioGroup = ({ onSelect, active }: any) => {
  return (
    <div>
      <label className="text-xs">Package*</label>
      <div className="flex flex-row">
        {Object.keys(PackageList).map((pack: string) => (
          <Radio
            key={pack}
            active={pack === active}
            onSelect={() => onSelect(pack)}
            className="flex-col p-4"
          >
            <h1 className="text-xl">{PackageList[pack].name}</h1>
            <p className="text-sm font-bold italic">
              +{PackageList[pack].extra}% extra
            </p>
          </Radio>
        ))}
      </div>
    </div>
  );
};
