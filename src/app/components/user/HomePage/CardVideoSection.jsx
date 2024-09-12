import react from "react";

const CardVideoSection = () => {
  return (
    <div className="mt-32">
      <h1 className="text-5xl font-bold my-10 text-center">
        India's Most Ambition Car{" "}
      </h1>
      <div>
        <video
          autoPlay
          loop
          controls
          style={{ width: "100%", height: "100%" }}
          src="https://youtu.be/rc4Scl_CnPU?si=-njMcOoaX7XXxVpk"
        >
          here
        </video>
      </div>
    </div>
  );
};
export default CardVideoSection;
