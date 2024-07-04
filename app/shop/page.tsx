"use client";

import { Suspense } from "react";
import Container from "../components/Container";
import ShowProducts from "./ShowProducts";

export default function Search() {
  return (
    <Container>
      <Suspense fallback={<div>Loading ...</div>}>
        <ShowProducts />
      </Suspense>
    </Container>
  );
}
