// As a general rule, if the service names something, we use that name, no matter how stupid or inconsisten with style.

[@bs.deriving jsConverter]
type response_type = [ | [@bs.as "code"] `Code | [@bs.as "token"] `Token];

type loginParams = {
  client_id: string,
  redirect_uri: string,
  response_type,
  state: string,
  scope: string,
};

type logoutParams = {
  client_id: string,
  logout_uri: string,
};

Js.Promise.(Axios.get(".amazoncognito.com/oauth2/authorize?"));