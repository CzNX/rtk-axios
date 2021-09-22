import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, selectAsync } from "./rtk/asyncSlice";
import { add, deletes, editor, selectTodo } from "./rtk/todoSlice";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
const App = () => {
  const list = useSelector(selectTodo);
  const { list: mylist, status } = useSelector(selectAsync);
  const dispatch = useDispatch();
  const [value, setvalue] = useState("");
  const [edit, setEdit] = useState(false);
  const [editid, seteditid] = useState(null);
  const id = Math.round(Math.random() * 400000);
  const addAction = (e) => {
    e.preventDefault();
    if (!value) return;
    if (edit) {
      dispatch(editor({ editid, value }));
      setEdit(false);
      setvalue("");
      seteditid(null);
    } else {
      dispatch(add({ id, value }));
      setvalue("");
    }
  };

  const editer = (id) => {
    setEdit(true);
    const thatitem = list.find((i) => i.id === id);
    seteditid(thatitem.id);
    setvalue(thatitem.value);
  };

  // fetch once

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div>
      <h1>Todo list</h1>
      <form
        action="
      "
      >
        <input
          type="text"
          value={value}
          onChange={(e) => setvalue(e.target.value)}
        />
        <button type="submit" onClick={addAction}>
          add
        </button>
      </form>

      <div className="display">
        {list?.map((i) => (
          <div key={i.id}>
            <ul>
              <li>{i.value}</li>
              <button onClick={() => dispatch(deletes(i.id))}>X</button>

              <button onClick={() => editer(i.id)}>Edit</button>
            </ul>
          </div>
        ))}
      </div>
      {status === "loading" ? (
        <Loader
          type="Grid"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      ) : (
        <div className="postsasync">
          {mylist?.map((i) => (
            <div key={i.id}>
              <ul>
                <li>{i.title}</li>
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
