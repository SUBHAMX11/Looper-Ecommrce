import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "ssjuio99",
  dataset: "production",
  apiVersion: "2022-09-04",
  useCdn: "true",
  token:
    "skEl9lsanRtH5eDprS3EVn2HyKdXh7HrU2tdhjMA6Zw8egqPOvdzWpx8ryUXNFZWQsCztTxzT6DWMNwbziAqr8JA5onGvcHL22pHoQPrAO4DiZw0ujvUutukQOnOZBXJjY8GjMTew86kN2HwNMQoK1tl0w2sI2VW2elVBfkz4maMK4cmXwSd",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
