import React, { useCallback,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeName } from "../../store/profile/actions";


export const Profile = (props) => {
  const { showName, name } = useSelector((state) => state);
  const dispatch = useDispatch();
    const [value, setValue] = useState('');
    const handleChange = useCallback((e) => {
        setValue(e.target.value);
    }, []);

    const setName = useCallback(() => {
        dispatch(changeName(value))
    }, [dispatch, value]);
  return (
      <div>
        <div>
          <h4>Profile</h4>
        </div>
           <div>{value}</div>
        <div>

          <input type="text" value={value} onChange={handleChange} />
        </div>
        <div>
          <button onClick={setName}>Change Name</button>
        </div>
      </div>

  );
};