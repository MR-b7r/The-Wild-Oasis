import { getCountries } from "@/app/_lib/data-service";
import { ICountry } from "@/app/_TS/types";

async function SelectCountry({
  defaultCountry,
  name,
  id,
  className,
}: ICountry) {

  const countries = await getCountries();
  const flag =
    countries.find(
      (country: { name: string }) => country.name === defaultCountry
    )?.flag ?? "";

  return (
    <select
      name={name}
      id={id}
      // Here we use a trick to encode BOTH the country name and the flag into the value. Then we split them up again later in the server action
      defaultValue={`${defaultCountry}%${flag}`}
      className={className}
    >
      <option value="">Select country...</option>
      {countries.map((country: { name: string; flag: string }) => (
        <option key={country.name} value={`${country.name}%${country.flag}`}>
          {country.name}
        </option>
      ))}
    </select>
  );
}

export default SelectCountry;
