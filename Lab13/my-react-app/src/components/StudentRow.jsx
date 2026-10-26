import {useContext} from "react";
import {ThemeContext} from "../context/ThemeContext";
import changeTheme from "../App.jsx"

function StudentRow(){
    const {theme, changeTheme}= useContext(ThemeContext);
    return (
        <tr>
            <tr>
                <th>name </th>
                <th>roll no </th>
                <th>theme</th>
                <th>button</th>
            </tr>
            <tr>
                <td>rakshata</td>
            <td>12</td>
            <td>{theme}</td>
            <td>
                <button onClick={changeTheme}>Change Theme</button>
            </td>
            </tr>
        </tr>

    );
}

export default StudentRow;