import React, { useEffect } from "react";
import { allPokemonSelector, fetchAllPokemon } from "./feature/pokemon/pokemonSlice";
import { Avatar, List } from "antd";
import { useAppDispatch, useAppSelector } from "./store/hook";
const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllPokemon());
  }, []);

  const  {allPokemon}  = useAppSelector(allPokemonSelector);

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
