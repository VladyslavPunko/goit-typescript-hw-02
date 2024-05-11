import axios from "axios";
let perPage = 15;

export async function fetchPhotosByInput<T>(
  inputSearch: string,
  page: number
): Promise<T> {
  const ACCESS = "oyaKjse9erYpC8_merX5E1mvW6IUZrjoER6jMTgJ_Rs";
  const url = `https://api.unsplash.com/search/photos?query=${inputSearch}&client_id=${ACCESS}`;
  const respons = await axios.get<T>(url, {
    params: {
      per_page: perPage,
      page: page,
    },
  });
  const photos = respons.data;

  return photos;
}
