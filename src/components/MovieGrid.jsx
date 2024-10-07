import React from 'react';
import './MovieGrid.css'; // Import the CSS for grid styling

const movies = [
  {
    image: "https://occ-0-6096-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABc3J4rGpauEDF95ZxzCpIWXY2lxhbuXxl1JMqH7v2Eojnx0u9jzau4m1culJ1H-Qv6BcT5A4DeOVMTB0lOqJo2UeoLKUYZt9USM.webp?r=c18",
    // title: "Movie 1"
  },
  {
    image: "https://occ-0-6096-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABSqyWtW8eelGbrToC814-NBQPuYfij6Fkm4j4zh613N_HTJMeSVYXp9i3r7C-oog3Ixe04CLcBQblBG4zR158S7zK_T8mvUZ2-M.webp?r=d51",
    // title: "Movie 2"
  },
  {
    image: "https://occ-0-6096-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABaylJexEyp_q4t65tkr7eK4FLYpnnx5IGFZ-9j6qww4Yw5NptkTjaWJAksVHxqVr3pWQ9TEqvI1BFvb0K6Yt_xiMkdWKxOsvzAg.webp?r=f46",
    // title: "Movie 3"
  },
  {
    image: "https://occ-0-6096-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcxCQdF4J7ALY1V5g0l1K47xU7NYuqARLbWncXBC3oVkiRl3YeMOEHebsOZJKCu04j_CPSwyfPsEqkvd-ctp9xxpNPxmTFrP0upaPRcPCiKCmgNAQOJWK7qe-Bmh1OlwCwky.jpg?r=3bc",
    // title: "Movie 4"
  },
  {
    image: "https://occ-0-6096-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABaRpVBmp5khYp3vr3KWqLQ7dvVrg38rfHxwlFILyrUHW_SC_-5rj80PdVyqzLR1wZBi181XrPqZXOESYRUFe5GOxFqf15LUEuNT9oaQeyv7r61xKEXuHRPRAA_jD0SJQG3_X.jpg?r=44c",
    // title: "Movie 5"
  },
  {
    image: "https://occ-0-6096-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcETzPCTQQGuvlzt98Aihw8tJqY9URAXnzwUzD9JONdOrQjR8tS70BIkGfpEIUifnudJmbZtVriSgl81oFvwT3vlW02eYimMifMSIH6rMQmoudPOczd8C3poy3K4gTEO-2B_.jpg?r=d92",
    // title: "Movie 6"
  },
  {
    image:"https://occ-0-6096-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdajO0ZpAVCnIzWo5GuHR3yghv_FiVHcRIDTuz3E4yPXZslQntINimtMspHl3dQpbnCF2gtMNCFGWeyTQsVMli-QVfuvvbqHONTibog_fk9K5XM9_TAoE7w-o4jTzeMELvNjXOXm4fitCeROlObQW0okiE9FZYiuk7_KcLOuQEIVCeM4oEu1847vb2I_cESSl2o1tu5yU_KbXagZhDHMxAIe-alPtWEIeoy4PMgSbxKzbBV2RZE-SqDjFQkMsfJYwL0Rd-RKiNQNfcVd0yEaVf7hn0QoXEIIHGu_Cf7kpGQWT40Zu2DYTsmsDq-ApuILgMMaQRtClhKIEZZaSZiEYgu7HwQINjdsB5H0uKA-fWjRzA.jpg?r=a09"
  },
  {
    image:"https://occ-0-6096-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABYQR8keX2salvT6mI4gP7R_0td2Ij-YQEerhrfNYEZ7YK1Y69R4h_vyB5oxyEIST4uvUw749SOsF2JXJ_kfR0mnSMW81hlOCxyl1RAjp6vbzZiESK010TylkUBM_hYb3s2fl.jpg?r=695"
  },
  {
    image:"https://occ-0-6096-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZ2hPGwxQ5W7j25Ty4Htwtv5j-K4TY3AnJvtbu0LnzxKtLIDJxSHW8BtGLOIVeN1BMWmSDzJxPfBmQ82jT9mfS6VON9pERTaGOfz9CmJdK_ul6yCE9FmfcX77PkNPs-bCjhS.jpg?r=74a"
  },
  {
    image:"https://occ-0-6096-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABYPfMbjdlE8ZoNBAapVe-gaB27fqwvjk8zR26iPWrh-jB2RIjVbWZ8iW9ZOmPQieMr0Njh9KJGGNNRGg7Cnb9Wi7uXPor4uqpDA.webp?r=09f"
  },
  {
    image:"https://occ-0-6096-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXVoThpH7NZEkdsSXwH_5iGi6b4nb0VNhIwHGz97uxNuhqWMEkr1V_QvxfddX4gmtse039zX_C2Q6T_aDnAtvHt929xM_uGyQD86ETmv7ArW_5QzS7EJ_mxn9actONYRrAOz_wNta9J3KMnolFFdivm5djmTc5qx1NI.webp?r=7a1"
  },
  {
    image:"https://occ-0-6096-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABTY4_sZdIv57qfwN1fdpIBrS0FBPmTsEEG_2apZM-kMdN5bFugs2Bts-a4kHf8gFE_oxmJNxYAkXhZSTFcsWs_fkdzG5DEbOkiWxlvjZIcb3uWYEO5cG8mNVlEjsUgRsr30z.jpg?r=aca"
  },
  {
    image:"https://occ-0-1492-3663.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeyUnDPsSz8-nkZoWhgyU454OogTNtz7i-7reZXau4vhb3YLsSJrmV5BG-i6p9glh9KftPaQEG3EIvudrvbcRZsTN7DMzU_T7BI.webp?r=871"
  },
  {
    image:"https://occ-0-1492-3663.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABYvJM6LNx5Ahk1AFRuLVghlc_f-m7MViSPqmBFfnBDlPk02b-cIvnu7Rp028v1t6Iq1bhBi9Dy89wVnnsrdpwONL6BbP7buIqag.webp?r=904"
  },
  {
    image:"https://occ-0-1492-3663.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfC9DNYYT9C_j76Ru7MQWSV5XLBGerNvpd7jC6HD44zuBwF269KmG-Y9LdbsbgnPxunxwHHi4hALp_FAmMNwlo1prj8qbAZLc4w.webp?r=070"
  },
  {
    image:"https://occ-0-1492-3663.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXH2h11qJjVC08crDrLFyCNX60IZk2xc7CM6xhCYjbd6CheCmpkKO6Zq6UnTbxz_1DEi0N1ljX11DLDodvRcxESURFyXYSKWJ58.webp?r=232"
  },
  {
    image:"https://occ-0-1492-3663.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbSjHpeXSFb129wopx64f0EEMaoeIPbof0_CVeEXFNXp8OY4Hzwqy9RtUa9d8os9apgyCI899AcTebZZQ2_aHwIlBwtkaGuMt-M.webp?r=16a"
  },
  {
    image:"https://occ-0-1492-3663.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRih9wldiyyoq67h0ahRgtRN64vyTsajEA7FeaTwBHC28eLmvklQ_nUNvquTvHQnr94R_INqnWbwpGv6XBASPq94a90cjKn28BY.webp?r=1ed"
  },
  {
    image:"https://occ-0-1492-3663.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXENqv7XzpCyd7vtBoxKstJJBwuSUTVvEVGbL59mJ1bj2n7YPFWN5FCSLqukamVkwqP-EE8giDY0628JqE5qYh5Q7Gf5VkbU0Js.webp?r=40f"
  },
  {
    image:"https://occ-0-1492-3663.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQ6D4ZdYcG0XQisuMvdfzA5O9kf-GJGkePTjWooYiqA5DMCf586YhvbS3zCys56pvUBoE4ba6hMZWds8924jwEak5s4YqiJLX28.webp?r=4b0"
  },
  {
    image:"https://occ-0-1492-3663.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbbkq4R2QvWRD68wkVoy3Vy_cV5C8QyRu66T6CdCLnNn8ihZqNR-CLbR-bD8HWcUAox5Ez5SqN0ZQlH2cPdmY2062zt0icWy0tk.webp?r=b20"
  },
  {
    image:"https://occ-0-1492-3663.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABYwusk9oVJXxiawhYe6h4JP8L_rlKrF4KaM7NZCq2r1jL_iMPvJeSUFI6d93nZlkRw3wSkndnnTpSVaHbEhjkWNzKkF3mfOiPy4.webp?r=a72"
  },
  {
    image:"https://occ-0-1492-3663.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABauS7gs4vClmSSqic7WPklJIHbtxzHZtST1DnGgW0pWz3wfmcE6IPyNQeMS5KknAJgVfH5AyWL7-WExOHJp-zuPvprjKx-ViYBztAb_zpsvsFe37ywrDzbfWgxyCrMMfxs7J.jpg?r=f53"
  },
  {
    image:"https://occ-0-1492-3663.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABYkgoseD_TOHDLSjIGLHiekygHJvAajW9ZttnvPJI60gRQVMlE9nhMNYPT3WI3BF9DIzkJrEONtWLUwUsSF6W1aV3OfSTmzfY8v9j1P35_hyOM8MiUekrJ1JXCYyk6ZN-4PC.jpg?r=4d2"
  },
  {
    image:"https://occ-0-1492-3663.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZ2hPGwxQ5W7j25Ty4Htwtv5j-K4TY3AnJvtbu0LnzxKtLIDJxSHW8BtGLOIVeN1BMWmSDzJxPfBmQ82jT9mfS6VON9pERTaGOfz9CmJdK_ul6yCE9FmfcX77PkNPs-bCjhS.jpg?r=74a"
  }
]; 

const MovieGrid = () => {
  return (
    <div className="movie-grid">
      {movies.map((movie, index) => (
        <div className="movie-card" key={index}>
          <img src={movie.image} alt={movie.title} className="movie-image" />
          <div className="movie-overlay">
            <div className="movie-options">
              <button className="play-btn">▶ Play</button>
              <button className="like-btn">👍 Like</button>
              <button className="info-btn">ℹ More Info</button>
            </div>
   
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieGrid;