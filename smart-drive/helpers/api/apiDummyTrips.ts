import supabase from "./supabase";

export default async function getDummyTrips() {
  const { data, error } = await supabase.from("Trips").select("*");
  return data;
}
