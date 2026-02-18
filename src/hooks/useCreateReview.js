import { CREATE_REVIEW } from "../components/graphQL/mutations";
import { useMutation } from "@apollo/client/react";

const useCreateReview = () => {
    const [mutate, result] = useMutation(CREATE_REVIEW)

    const createReview = async ({ ownerName,
        repositoryName,
        rating,
        text
    }) => {

        const reviewDetails = {
            ownerName,
            repositoryName,
            rating,
            text
        };

        const response = await mutate({ variables: { review: reviewDetails } });

        if (response.data) {
            console.log("created a review");

        }
        return response;
    };

    return [createReview, result];
};

export default useCreateReview;
