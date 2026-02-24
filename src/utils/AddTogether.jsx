function AddTogether(str){

    let final_str = ""

    for(let i = 0; i < str.length; i++){
        if (str[i] == " "){
            final_str += "";
        }
        else{
            final_str += str[i];
        }
    }

    return final_str
}

export default AddTogether