import { typer } from "../index";
import {
  targetSimpleObj,
  targetSimpleArray,
  targetHardObject,
  targetHardArray,
  targetFirstComplicated,
} from "./testAssets/targets";
import {
  resultSimpleObj,
  resultSimpleArray,
  resultHardObject,
  resultHardArray,
  resultFirstComplicated,
} from "./testAssets/results";

describe("Simple pattern tests", () => {
  it("Simple target object must be equal result simple object", () => {
    expect(typer(targetSimpleObj)).toStrictEqual(resultSimpleObj);
  });
  it("Simple array object must be equal result simple array", () => {
    expect(typer(targetSimpleArray)).toStrictEqual(resultSimpleArray);
  });
});

describe("Hard pattern tests", () => {
  it("Hard target object must be equal result hard object", () => {
    expect(typer(targetHardObject)).toStrictEqual(resultHardObject);
  });
  it("Hard target array must be equal result hard array", () => {
    expect(typer(targetHardArray)).toStrictEqual(resultHardArray);
  });
});

describe("Complicated pattern tests", () => {
  it("Complicated target object must be equal result complicated object", () => {
    expect(typer(targetFirstComplicated)).toStrictEqual(resultFirstComplicated);
  });
});
