import { useEffect } from "react";
import { ArtSlider } from "../components/ArtSlider";
import { Wrapper } from "../components/Wrapper";
import { pb } from "../db/dbconnect";

export default function HomePage() {
  useEffect(() => {
    const grabUsers = async () => {
      const resultList = await pb.collection("painting").getFullList();
      console.log(resultList);
    };
    grabUsers();
  });
  
  const loginAsAdmin = async () => {
    const authData = await pb
      .collection("users")
      .authWithPassword("test123@test.com", "test1231");
    console.log(authData);
    console.log(pb.authStore.isValid);
    console.log(pb.authStore.token);
    console.log(pb.authStore.isSuperuser);
    console.log(pb.authStore.record?.id);
  };
  return (
    <Wrapper>
      <button onClick={loginAsAdmin}>login as admin</button>
      <div className="background-secondary montserrat font-extralight text-center text-3xl my-8 md:w-fit md:px-48 w-full py-6 place-self-center text-primary">
        Poznaj moją twórczość
      </div>
      <div className="flex items-center justify-center -mx-[26px] sm:-mx-0">
        <ArtSlider />
      </div>
    </Wrapper>
  );
}
