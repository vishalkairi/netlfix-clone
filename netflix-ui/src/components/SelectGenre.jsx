import styled from "styled-components";
import { fetchDataByGenre, getGenres } from "../store";
import { useDispatch } from "react-redux";

export default function SelectGenre({ genres, type }) {
  const dispatch = useDispatch();
  return (
    <Select
      className="flex"
      onChange={(e) => {
        console.log(genres, e.target.value.toLowerCase(), type);
        dispatch(
          fetchDataByGenre({
            genres,
            genre: e.target.value.toLowerCase(),
            type,
          })
        );
      }}
    >
      {genres.map((genre) => {
        return (
          <option value={genre.id} key={genre.id}>
            {genre.name}
          </option>
        );
      })}
    </Select>
  );
}

const Select = styled.select`
  margin-left: 5rem;
  cursor: pointer;
  font-size: 1.4rem;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
`;
