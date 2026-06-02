import axios from "axios";
import type { AxiosResponse } from "axios"; // this explicitly tells from .d.ts i am importing types

//axios is a webrequest library --> here u already got the type declaration .d.ts files in the modules "lib" but in case u didnt get the type declaration files from which u get all the suggestions,errors,hints from typescript then u have to seperately install them

//so whatever the data comes from webrequest or u send any webresponse then we have to form an interface like this or its object definition/structure like this
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const fetchData = async () => {
  try {
    const response: AxiosResponse<Todo> = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1",
    );
    console.log("Todo", response.data);
  } catch (error: any) {
    if (axios.isAxiosError(error)) console.log("Axios Error", error.message);
  }
};
