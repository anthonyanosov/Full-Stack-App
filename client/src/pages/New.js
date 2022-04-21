import React from "react";

function New() {
    return(
        <form>
            <label for="iname">Item Name:</label>
            <input type="text" id="iname" name="iname"></input><br/>
            <label for="quantity">Quantity:</label>
            <input type="number" id="quantity" name="quantity"></input><br/>
            <label for="price">Price:</label>
            <input type="number" id="price" name="price"></input><br/>
            <input type="submit" value="Submit"></input>
        </form>
    );
}

export default New;
