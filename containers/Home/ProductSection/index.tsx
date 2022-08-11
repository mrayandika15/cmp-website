import { Button, Heading, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import axios from "axios";
import { CustomImage } from "../../../components";
import { RoundedSection } from "../../../layouts";
import { useRouter } from "next/router";

interface IProduct {
  name: string;
  imgUrl: string;
}

const ProductSection: React.FC = () => {
  const [Product, setProduct] = React.useState<IProduct[]>([]);

  const router = useRouter();

  React.useEffect(() => {
    (async () => {
      await axios
        .get<IProduct[]>("/api/products", {
          headers: {
            Accept: "application/json",
          },
        })
        .then((response) => setProduct(response.data));
    })();
  }, []);

  return (
    <RoundedSection>
      <Heading variant="primary">Produk Kami Meliputi</Heading>
      <Button variant="secondary" onClick={() => router.push("/product")}>
        Produk
      </Button>
      <Grid
        gap="25px"
        templateAreas={`"header1 header2 header3"
                        "main main side1"
                        "main main side2"`}
        placeItems="center"
      >
        <GridItem area={"header1"}>
          <CustomImage name={Product[0]?.name} imgUrl={Product[0]?.imgUrl} />
        </GridItem>
        <GridItem area={"header2"}>
          <CustomImage name={Product[1]?.name} imgUrl={Product[1]?.imgUrl} />
        </GridItem>
        <GridItem area={"header3"}>
          <CustomImage name={Product[2]?.name} imgUrl={Product[2]?.imgUrl} />
        </GridItem>
        <GridItem area={"main"}>
          <CustomImage name={Product[3]?.name} imgUrl={Product[3]?.imgUrl} />
        </GridItem>
        <GridItem area={"side1"}>
          <CustomImage name={Product[4]?.name} imgUrl={Product[4]?.imgUrl} />
        </GridItem>
        <GridItem area={"side2"}>
          <CustomImage name={Product[5]?.name} imgUrl={Product[5]?.imgUrl} />
        </GridItem>
      </Grid>
    </RoundedSection>
  );
};

export default ProductSection;
