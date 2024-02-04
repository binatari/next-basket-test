import { Box, Typography } from "@mui/material";
import React from "react";
import PostCard from "../card/postCard";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const posts = [
  {
    thumbnail: "/assets/images/post-1.png",
  },
  {
    thumbnail: "/assets/images/post-2.png",
  },
  {
    thumbnail: "/assets/images/post-3.png",
  },
];

const FeaturedPosts = () => {
  return (
    <Box>
      <Box sx={{ marginTop: "243px" }}>
        <Typography
          variant="h6"
          color={"primary.main"}
          sx={{ textAlign: "center" }}
        >
          Practice Advice
        </Typography>
        <Typography
          variant="h2"
          color={"text.primary"}
          sx={{ textAlign: "center", my: "10px" }}
        >
          Featured Posts
        </Typography>
      </Box>
      <Grid2 container sx={{ mt: "80px", px: "45px" }} spacing={"12px"}>
        {posts.map((post) => (
          <Grid2
            key={post.thumbnail}
            xs={12}
            sm={6}
            md={4}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box>
              <PostCard thumbnail={post.thumbnail} />
            </Box>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default FeaturedPosts;
