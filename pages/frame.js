import { useState } from 'react';

function Chat({ onClose }) {
  return (
    <>
      <header>
        <h3>I am the Chat Header</h3>
        <button className="close" onClick={() => onClose(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </header>
      <main>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
          architecto at aut beatae corporis delectus enim facere illum ipsum
          magnam, modi molestiae nihil porro possimus quibusdam similique vel
          veniam voluptatibus.
        </p>
        <p>
          Consequatur cupiditate dolore minus modi nesciunt! Necessitatibus
          quaerat, rerum? Alias architecto blanditiis delectus dignissimos
          doloremque eligendi, ex excepturi expedita fugit iusto maiores
          molestias nisi obcaecati omnis quia rem sint sit!
        </p>
        <p>
          Adipisci consectetur debitis dignissimos eveniet maiores obcaecati
          possimus quia ratione rerum ullam! A architecto cumque deleniti
          dolorum eaque fugit incidunt ipsa magni neque nostrum possimus
          reiciendis, repellat, reprehenderit similique suscipit.
        </p>
        <p>
          Cum deserunt dolores eaque illum iure minus nihil porro quam quas sit!
          Consequatur fugit in iusto quas sunt! Ab et incidunt ipsam iusto
          maxime neque quaerat quos repellat sint sit.
        </p>
        <p>
          Alias asperiores atque aut consequatur, eligendi fugit hic illo iste
          minima modi perferendis praesentium, quam quos repudiandae sed
          temporibus ut vel veritatis. Ab alias consectetur ea eum magnam quos,
          tenetur!
        </p>
        <p>
          Adipisci cum distinctio dolorum excepturi expedita facilis inventore
          laboriosam mollitia nostrum odio officiis, perferendis provident, quo
          quos reprehenderit sit totam! Aperiam cum dolorum eos fuga? Maxime rem
          saepe velit veniam!
        </p>
        <p>
          Aspernatur dicta doloribus dolorum inventore, ipsa odio sed unde! Eos
          est mollitia, nam necessitatibus neque perspiciatis placeat quia
          saepe? At blanditiis cum dicta dolorem et iusto labore magnam nam,
          porro!
        </p>
        <p>
          A alias autem beatae deleniti distinctio dolor dolores eos est magnam
          magni maiores minus modi non obcaecati quae quaerat quam quasi
          reiciendis repellat, reprehenderit sequi tempore temporibus tenetur ut
          voluptatem?
        </p>
        <p>
          Asperiores doloribus ea eum facere inventore non, quidem ratione
          soluta totam. Accusantium aperiam deleniti dignissimos, distinctio,
          dolore dolorem eligendi eveniet illum ipsa iste numquam odio qui quis
          soluta, vero voluptatibus?
        </p>
        <p>
          Accusantium asperiores autem iusto nesciunt quidem voluptates. Aliquid
          architecto aspernatur atque dolore facere ipsum maiores natus neque
          quidem quisquam rem, rerum, sed sint totam vero! Blanditiis nulla
          officiis ut voluptas?
        </p>
        <p>
          Aspernatur atque consequuntur cum dicta dignissimos doloremque
          doloribus eum expedita fugit id ipsum laborum maiores maxime nam natus
          necessitatibus pariatur provident quidem rem rerum sapiente sequi
          temporibus, tenetur, voluptatem voluptatibus!
        </p>
        <p>
          A adipisci aspernatur at corporis, cum cumque dolor doloremque enim
          est et fugiat id inventore, non nostrum officiis optio porro quaerat,
          rem similique sit sunt velit voluptatem. Delectus error, quis!
        </p>
        <p>
          A aliquam, consequuntur, deleniti fugiat illo ipsum itaque magni
          quibusdam, ratione repellat sed ut! Illum, repellendus ullam. A
          architecto aut cupiditate fugit in ipsa, laborum, nemo praesentium
          repellendus vitae voluptas.
        </p>
        <p>
          Asperiores eligendi ex explicabo illo, in libero maiores nemo nostrum
          numquam voluptas? Accusantium assumenda autem culpa debitis delectus,
          dolore dolorum eaque est fuga laborum possimus qui, quia repudiandae
          sit unde?
        </p>
        <p>
          Atque dolores doloribus eaque error inventore ipsum, nostrum
          perferendis placeat praesentium quam quisquam ullam. Amet atque
          exercitationem harum incidunt iste praesentium ratione soluta. Nam
          officiis qui, reiciendis repudiandae similique veniam!
        </p>
        <p>
          Amet cupiditate error facere ipsam ipsum quo repellendus temporibus
          veniam. Atque non officiis sequi! Aperiam assumenda at atque dolorem
          ea expedita harum minima nesciunt nisi pariatur quisquam quos,
          repudiandae saepe?
        </p>
        <p>
          Cumque dolore error omnis recusandae tenetur! A accusamus adipisci
          alias delectus doloribus excepturi facere fuga fugiat harum impedit
          ipsa, magnam maxime nihil obcaecati pariatur porro recusandae sint
          unde vero voluptas!
        </p>
        <p>
          Accusamus adipisci animi atque corporis delectus eius esse explicabo,
          facere fuga, iste iusto magnam molestiae mollitia necessitatibus neque
          nisi quasi repellat repudiandae sed, sequi similique totam veritatis
          vero voluptate voluptatibus!
        </p>
        <p>
          Aspernatur consectetur, consequatur ipsa odio reiciendis reprehenderit
          repudiandae temporibus? Dolorum eum laboriosam non sequi vitae.
          Asperiores beatae cupiditate ducimus illo, sit voluptas. Aperiam
          asperiores corporis cupiditate dignissimos illo impedit nulla.
        </p>
        <p>
          Accusamus architecto assumenda beatae cum cumque cupiditate dicta
          doloribus expedita explicabo fugit id ipsum itaque iusto magni maxime
          nemo provident quasi, quisquam, quos recusandae sed sequi veritatis
          voluptas. Distinctio, optio.
        </p>
      </main>
      <footer>
        <form>
          <input />
        </form>
      </footer>
    </>
  );
}

export default function Frame() {
  const [open, setOpen] = useState(false);

  return (
    <div id="frame">
      {open && <Chat onClose={() => setOpen(false)} />}
      {!open && (
        <button className="chat-button" onClick={() => setOpen(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
