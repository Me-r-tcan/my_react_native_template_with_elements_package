import axios from "axios";
import { showMessage } from "react-native-flash-message";

import * as actions from "../configuration/apiActions.js";
import * as globals from "../../config/globals";

const api =
  ({ getState, dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== actions.apiCallBegan.type) return next(action);

    const {
      url,
      method,
      data,
      params,
      successMessage,
      onStart,
      onSuccess,
      onError,
    } = action.payload;

    if (onStart) dispatch({ type: onStart });
    next(action);

    const authToken = getState().entities.auth.token;
    axios.defaults.headers.common["x-auth-token"] = authToken;

    try {
      const response = await axios.request({
        baseURL: `${globals.DOMAIN_NAME}`,
        url,
        method,
        data,
        params,
      });

      dispatch(actions.apiCallSuccess(response.data));

      if (onSuccess) dispatch({ type: onSuccess, payload: response.data });

      if (successMessage) {
        showMessage({
          message: "Başarılı",
          description: successMessage,
          icon: { icon: "auto", position: "left" },
          type: "success",
        });
      }
    } catch (error) {
      let errorMessage = "";
      if (error.response) {
        if (error.response.data.errorMessage) {
          errorMessage = error.response.data.errorMessage;
        } else {
          errorMessage = "Bir hata meydana geldi.";
        }
      } else {
        errorMessage = error.message;
      }
      dispatch(actions.apiCallFailed(errorMessage));

      showMessage({
        message: "Hata",
        description: errorMessage,
        icon: { icon: "auto", position: "left" },
        type: "danger",
      });

      if (onError) dispatch({ type: onError, payload: errorMessage });
    }
  };

export default api;
