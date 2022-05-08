import { useFormik } from "formik";
import { motion } from "framer-motion";
import * as Yup from "yup";
import { CountryList, PackageList } from "../data";
import { CountryRadioGroup } from "./CountryRadio";
import { PackageRadioGroup } from "./PackageRadio";
import { Page } from "./Page";
import { InitialFormType } from "../types";

const InsuranceSchema = Yup.object().shape({
  name: Yup.string().required("name is required"),
  age: Yup.number()
    .min(1, "How can we insure who isn't born yet")
    .max(
      99,
      "Your age is over our accept limit. We are sorry we can't help you."
    ),
  country: Yup.string().required("country is required"),
  package: Yup.string().required("package is required"),
});

export const PageForm = ({ onBack }: { onBack: () => void }) => {
  const { values, handleChange, errors, handleSubmit, setFieldValue } =
    useFormik({
      initialValues: { name: "", age: "", country: "", package: "" },
      validationSchema: InsuranceSchema,
      onSubmit: (e: InitialFormType) => {
        console.log(e);
      },
    });

  let nextDisabled =
    values.name !== "" &&
    values.age !== "" &&
    values.country !== "" &&
    values.package !== ""
      ? false
      : true;

  nextDisabled = parseInt(values.age) < 100 ? nextDisabled : true;

  const calculatePremium = () => {
    const { name, age, country, package: pack } = values;
    const { rate } = CountryList[country];
    const { extra } = PackageList[pack];
    let premium = 10 * +age * rate * (1 + extra / 100);
    return `${premium.toFixed(2)} ${CountryList[country].currency}`;
  };

  return (
    <Page>
      <div className="flex flex-col items-center flex-1 justify-center p-4 bg-blue-200 relative">
        <button
          onClick={onBack}
          className="absolute top-0 left-0 m-2 p-2 px-4 hover:bg-blue-600/40 font-bold"
        >
          {"Back"}
        </button>

        {errors.age ? (
          <motion.h1 layoutId="p1" className="text-3xl font-bold text-red-700">
            {errors.age}
          </motion.h1>
        ) : (
          <motion.div layoutId="p2">
            {!values.name && (
              <h1 className="text-3xl font-bold">Tell us about yourself</h1>
            )}
            {values.name && (
              <div>
                <p className="text-xl font-bold">Hello! {values.name}</p>
                {values.age && (
                  <p>
                    <b>{values.age}</b> Years Old
                  </p>
                )}
                {values.country && (
                  <p>
                    Lives in <b>{CountryList[values.country].name}</b>
                  </p>
                )}
                {values.package && (
                  <p>
                    wants <b>{PackageList[values.package].name} </b>
                    Insurance package
                  </p>
                )}
                {!nextDisabled && (
                  <p className="my-2 py-2 font-bold text-2xl">
                    Premium : {calculatePremium()}
                  </p>
                )}
              </div>
            )}
          </motion.div>
        )}
      </div>
      <div className="flex flex-col flex-1 px-16 justify-center">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col flex-1">
            <label className="text-xs">Name*</label>
            <input
              value={values.name}
              className="p-2 bg-slate-100"
              name="name"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col flex-1">
            <label className="text-xs">Age*</label>
            <input
              value={values.age}
              className="p-2 bg-slate-100"
              name="age"
              onChange={handleChange}
            />
          </div>
          <CountryRadioGroup
            onSelect={(e: string) => setFieldValue("country", e)}
            active={values.country}
          />
          <PackageRadioGroup
            onSelect={(e: string) => setFieldValue("package", e)}
            active={values.package}
          />

          <button
            disabled={nextDisabled}
            className="p-2 mt-4 bg-blue-600 text-white font-bold disabled:opacity-50 disabled:text-gray-300"
          >
            Buy
          </button>
        </form>
      </div>
    </Page>
  );
};
