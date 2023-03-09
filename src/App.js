import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPokemon } from "./feature/pokemon/pokemonSlice";
import { Avatar, List } from "antd";
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPokemon());
  }, []);

  const { allPokemon } = useSelector((state) => state.pokemonSlice);

  return (
    <>
      <List
        itemLayout="horizontal"
        dataSource={allPokemon.results}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar src={`https://joesch.moe/api/v1/random?key=${index}`} />
              }
              title={item.name}
            />
          </List.Item>
        )}
      />
    </>
  );
};

export default App;
