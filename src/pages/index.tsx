import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={"gap-5 columns-3xs md:columns-2xs flex justify-center items-center h-screen"}>
      <article className={'w-full aspect-square p-3'}>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit doloremque neque sequi! Reiciendis quam perspiciatis cum nobis nam cumque aliquam soluta dolor blanditiis, itaque, sunt corporis culpa sequi reprehenderit distinctio!</p>
        <p>Adipisci hic suscipit, delectus magni ipsa ipsum consectetur numquam. Perspiciatis quasi quidem eveniet cum. Magni quod asperiores, molestiae, eum voluptas odio distinctio rem quo repellendus, non debitis amet repellat? Nulla.</p>
      </article>
      <article className={'w-full aspect-square p-3'}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus optio eius, error quis vero ab, dolor debitis obcaecati fuga exercitationem harum ad blanditiis delectus quidem, minus sequi at molestias ullam!</p>
        <p>Dolores cumque maxime earum. Nam dolorum dolore quo, voluptatem ducimus accusantium qui ratione, mollitia cumque enim in pariatur iusto at ipsam aut suscipit distinctio aspernatur blanditiis unde! Libero, voluptas aut.</p>
      </article>
      <article className={'w-full aspect-square p-3'}>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit sit accusamus rem voluptatibus aliquam inventore laborum molestias aut minus quam, quasi eius temporibus, suscipit modi ullam fugiat ad voluptate nesciunt.</p>
        <p>Corrupti soluta nemo laborum qui necessitatibus optio quas architecto, minima consectetur nobis sint! Dolor debitis ipsum ducimus non iure dignissimos molestias earum ut reprehenderit vero, incidunt placeat, impedit, praesentium ullam?</p>
      </article>
      <article className={'w-full aspect-square p-3'}>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, libero aperiam. Voluptatibus obcaecati similique numquam, inventore ratione maiores? Deserunt vel officiis maiores fugiat minus ipsa minima architecto enim sunt officia.</p>
        <p>Ullam temporibus vitae, iusto sint autem quam quasi provident quo tenetur commodi exercitationem ea, consequuntur amet laborum a odio sed ipsam eaque dolorem illo, obcaecati voluptate! Similique eos assumenda nisi?</p>
      </article>
    </div>
  );
}
