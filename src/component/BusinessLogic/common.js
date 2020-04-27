
export const emailRegx = RegExp(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/);
export const formValid = ({formErrors, ...rest}) => {
    let valid = true;

    //validate form error being empty
    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false)
    });

    // validate the form was filled out
    Object.values(rest).forEach(val => {
        val == null && (valid = false)
    });

    return valid;
}