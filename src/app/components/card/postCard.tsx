import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

type PostCardProps = {
  thumbnail: string;
};

const PostCard = ({ thumbnail }: PostCardProps) => {
  return (
    <Box sx={{boxShadow:'0px 2px 4px 0px #0000001A'}}>
      <Box sx={{ width: "100%", overflow: "hidden", position:'relative' }}>
        <Image
          src={thumbnail}
          width={348}
          height={300}
          layout="responsive"
          objectFit="cover"
          objectPosition="top center"
          alt="postimage"
        />
      </Box>
      <Box p={"25px"}>
        <Box sx={{ display: "flex", gap: "15px" }}>
          <Typography
            variant="body2"
            color={"primary"}
            sx={{ fontWeight: 400 }}
          >
            Google
          </Typography>
          <Typography
            variant="body2"
            color={"text.secondary"}
            sx={{ fontWeight: 400 }}
          >
            Trending
          </Typography>
          <Typography
            variant="body2"
            color={"text.secondary"}
            sx={{ fontWeight: 400 }}
          >
            New
          </Typography>
        </Box>
        <Typography
          variant="h4"
          color={"text.primary"}
          sx={{ fontWeight: 400, mt: "10px" }}
        >
          Loudest à la Madison #1 (L&apos;integral)
        </Typography>
        <Typography
          variant="body1"
          color={"text.secondary"}
          sx={{ my: "10px", px: "0px" }}
        >
          We focus on ergonomics and meeting you where you work. It&apos;s only
          a keystroke away.
        </Typography>
        <Box sx={{ display: "flex", py: "15px" }}>
          <Typography
            variant="body2"
            sx={{ width: "50%", display: "flex", alignItems: "center" }}
          >
            <Image
              src={"/assets/icons/clock.png"}
              width={16}
              height={16}
              style={{ marginRight: "5px" }}
              objectFit="cover"
              objectPosition="top center"
              alt="postimage"
            />
            22 April 2021
          </Typography>
          <Typography
            variant="body2"
            sx={{ width: "50%", display: "flex", alignItems: "center" }}
          >
            <Image
              src={"/assets/icons/industry.png"}
              width={16}
              height={16}
              style={{ marginRight: "5px" }}
              objectFit="cover"
              objectPosition="top center"
              alt="postimage"
            />
            10 comments
          </Typography>
        </Box>
        <Typography variant="h6" sx={{ display: "flex", alignItems: "center" }}>
          Learn More
          <Image
            src={"/assets/icons/arrow-next.png"}
            width={9}
            height={16}
            style={{ marginLeft: "5px" }}
            objectFit="cover"
            objectPosition="top center"
            alt="postimage"
          />
        </Typography>
      </Box>
    </Box>
  );
};

export default PostCard;
