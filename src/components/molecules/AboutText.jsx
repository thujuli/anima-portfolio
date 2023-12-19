export default function AboutText() {
  const listOfText = [
    {
      id: 1,
      text: "Being a human is way too complicated. Time to be a unicorn.",
    },
    {
      id: 2,
      text: "Try it and you'll see. Then your Figma files are just gonna fly in color, glitter, interactions and autolayout.",
    },
    {
      id: 3,
      text: "Also, grow a beard. Check my bio if that is not clear.",
    },
    {
      id: 4,
      text: "Available for projects, from Monday to Tuesday, mainy between 14 and 16. (Unless there is a unicorn race on TV - DUH -in that case, come back another day).Projects include, RocknRoll covers, furniture refurbishing, Unicorn potty training and more.",
    },
  ];

  return (
    <div>
      {listOfText.map((item) => {
        if (item.id % 2) {
          return (
            <p
              className="leading-[26px] py-[5px] font-semibold bg-[#009379] text-[#F6DCE9]"
              key={item.id}
            >
              {item.text}
            </p>
          );
        }
        return (
          <p className="leading-[26px] py-[5px]" key={item.id}>
            {item.text}
          </p>
        );
      })}
    </div>
  );
}
