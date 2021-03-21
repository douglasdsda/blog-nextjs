import Typography from '@material-ui/core/Typography';

export default function Home({ allPostsData }) {
  return (
    <div>
      <Typography paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum sed
        eligendi corporis. Temporibus minus ex recusandae, assumenda voluptas
        soluta nobis. Tempora repellat explicabo natus maiores eveniet, commodi
        perferendis nulla vitae? Deserunt, odit numquam odio impedit nulla natus
        consequuntur adipisci. Laborum in quos fugit placeat natus beatae
        voluptates voluptatum provident? Quisquam tempore adipisci maxime quos
        hic quidem modi, soluta veniam. Vero. Recusandae cum a est amet dolor
        dicta doloremque temporibus blanditiis. Quidem aliquam ipsa ipsum harum
        aut at quae iusto accusamus vitae minus ducimus, corporis enim, quia
        vero dignissimos consectetur consequatur. Culpa facere id suscipit atque
        necessitatibus ducimus harum. Reprehenderit fuga minus optio magni at
        enim saepe natus repellat tempore, quos neque est facere, aut quam
        dolor. Sequi veritatis dolore sapiente. Laboriosam quasi nulla provident
        dolorem distinctio odio illo repellendus corporis veniam quis dolores
        mollitia vel, facere, excepturi doloremque minima maxime! Ipsam quae
        eveniet neque soluta, officia vitae sapiente quod voluptatum.
      </Typography>

      <Typography paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum sed
        eligendi corporis. Temporibus minus ex recusandae, assumenda voluptas
        soluta nobis. Tempora repellat explicabo natus maiores eveniet, commodi
        perferendis nulla vitae? Deserunt, odit numquam odio impedit nulla natus
        consequuntur adipisci. Laborum in quos fugit placeat natus beatae
        voluptates voluptatum provident? Quisquam tempore adipisci maxime quos
        hic quidem modi, soluta veniam. Vero. Recusandae cum a est amet dolor
        dicta doloremque temporibus blanditiis. Quidem aliquam ipsa ipsum harum
        aut at quae iusto accusamus vitae minus ducimus, corporis enim, quia
        vero dignissimos consectetur consequatur. Culpa facere id suscipit atque
        necessitatibus ducimus harum. Reprehenderit fuga minus optio magni at
        enim saepe natus repellat tempore, quos neque est facere, aut quam
        dolor. Sequi veritatis dolore sapiente. Laboriosam quasi nulla provident
        dolorem distinctio odio illo repellendus corporis veniam quis dolores
        mollitia vel, facere, excepturi doloremque minima maxime! Ipsam quae
        eveniet neque soluta, officia vitae sapiente quod voluptatum.
      </Typography>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
