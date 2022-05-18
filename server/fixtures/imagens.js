/*
 * Todos as imagens foram retiradas do site: https://unsplash.com/
 */
const images = [
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
  "https://images.unsplash.com/photo-1572635196237-14b3f281503f",
  "https://images.unsplash.com/photo-1560343090-f0409e92791a",
  "https://images.unsplash.com/photo-1586495777744-4413f21062fa",
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  "https://images.unsplash.com/photo-1503602642458-232111445657",
  "https://images.unsplash.com/photo-1553456558-aff63285bdd1",
  "https://images.unsplash.com/photo-1485955900006-10f4d324d411",
  "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f",
  "https://images.unsplash.com/photo-1602143407151-7111542de6e8",
  "https://images.unsplash.com/photo-1546868871-7041f2a55e12",
  "https://images.unsplash.com/photo-1583394838336-acd977736f90",
  "https://images.unsplash.com/photo-1543512214-318c7553f230",
  "https://images.unsplash.com/photo-1543163521-1bf539c55dd2",
  "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
  "https://images.unsplash.com/photo-1559056199-641a0ac8b55e",
  "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7",
  "https://images.unsplash.com/photo-1517142089942-ba376ce32a2e",
  "https://images.unsplash.com/photo-1560769629-975ec94e6a86",
];

const getImage = () => {
  const index = Math.floor(Math.random() * images.length);
  return images[index];
};

export default getImage;
