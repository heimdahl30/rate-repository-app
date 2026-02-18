import { CREATE_USER } from '../components/graphQL/mutations'
import { useMutation } from '@apollo/client/react'

const useCreateUser = () => {
    const [mutate, result] = useMutation(CREATE_USER)

    const signUp = async ({ username, password }) => {

        const userDetails = {
            username,
            password
        }

        const response = await mutate({ variables: { user: userDetails } })

        if (response.data) {
            console.log("user created")
        }

        return response

    }

    return [signUp, result]
}

export default useCreateUser
