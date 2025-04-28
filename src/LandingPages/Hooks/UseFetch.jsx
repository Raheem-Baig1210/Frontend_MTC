import axios from "axios"

const UseFetch = () => {
try {
    axios.get("URL")
} catch (error) {
    console.log(error)
}
}

export default UseFetch