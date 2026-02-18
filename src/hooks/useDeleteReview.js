import { DELETE_REVIEW } from "../components/graphQL/mutations";
import { useMutation } from "@apollo/client/react";

const useDeleteReview = () => {
    const [mutate, result] = useMutation(DELETE_REVIEW)

    const deleteReview = async ({ id
    }) => {

        const response = await mutate({ variables: { id } });

        if (response.data) {
            console.log("deleted a review");
        }
        return response;
    };

    return [deleteReview, result];
};

export default useDeleteReview;