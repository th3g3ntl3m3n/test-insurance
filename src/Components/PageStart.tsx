import { Page } from "./Page";

export const PageStart = ({ onNext }: any) => {
  return (
    <Page>
      <div className="flex flex-col items-center flex-1 justify-center p-4 text-center bg-blue-200">
        <h1 className="text-2xl font-bold">ABC Insurance Company</h1>
        <h2 className="font-bold text-blue-700">
          We cover insurance best in class, trustworthy company
        </h2>
      </div>
      <div className="flex flex-col items-center flex-1 justify-center p-4">
        <h3 className="my-4">
          To know your premium, start by clicking on Begin
        </h3>
        <button
          onClick={onNext}
          className="p-2 w-1/3 bg-blue-600 text-white font-bold"
        >
          Begin
        </button>
      </div>
    </Page>
  );
};
