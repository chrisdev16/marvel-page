import {Box, Pagination} from "@mui/material";

const AppPagination = () => {
    return (
        <Box
            mt={5}
            mb={5}
            display={"flex"}
            alignContent={"center"}
            alignItems={"center"}
            justifyContent={"center"}
        >
            <Pagination
                variant="outlined"
            />
        </Box>
    )
}

export default AppPagination;