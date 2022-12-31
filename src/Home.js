import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="  https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="amazon banner"
      />
      <div className="home__row">
        <Product
          id="12321341"
          title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
          price={598.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          description="Apple iPad Pro (12.9-inch, Wi-Fi, 128"
        />
        <Product
          id="12321342"
          title="Cristiano Ronaldo Limited edition Madrid jersey(2017, Champions league final ) - White "
          price={598.99}
          rating={4}
          image="data:image/jpeg;base64,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"
        />
      </div>
      <div className="home__row">
        <Product
          id="12321343"
          title="New Bottle of Limited edition italian wine (vodka)  "
          price={598.99}
          rating={4}
          image="data:image/jpeg;base64,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"
        />
        <Product
          id="12321344"
          title="Plain blue specially tacked t-shirt (Made in Italy) - Blue"
          price={598.99}
          rating={4}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRahViSKfBL8PeeR_U0WAjGdlOHx3guEg6f_A&usqp=CAU"
        />
        <Product
          id="12321345"
          title="Playstation 5 pro limited edition  (off-white,500GB) - off-white "
          price={598.99}
          rating={4}
          image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8TEBUQEBIWFhIVFRUVFRYXFRIXFRYVFRcWFxcSFxcYHSggGBolGxUVIjEhJSkrLi4uFx8zODUtNygtLisBCgoKDg0OFRAQFyseHR0tKy0rLS0rLS0rKy0tLTgrLS0tNy0rLS4wLS0tKzMrKy0tKystNy0uNystLS0rLS03N//AABEIAMABBwMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABgEDBAUHAgj/xAA8EAACAQIDBQUFBQgDAQEAAAAAAQIDEQQFIQYSMUFRB2FxgZETIjKhwTNCUmLwFHKCkqKxstEj4fFDFf/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAJBEBAQEBAAECBQUAAAAAAAAAAAERAjESIQRBUZHhA6GxwfD/2gAMAwEAAhEDEQA/AO4gAAAAAAAAAAAeZzSV2B6BhPGu/DT5l6GKi+7xLiavgJgigAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFqvWUV38kB6q1VFXZrqtVyd36FJzbd2eTcjNoACisZtcHYyKeNfNXMUEwbKGJg+dvEvGnPUKklwZPSutsDBhjXzV/AyIYmD528SYavAAigAAAAAAAAAAAAAAAAAAAAAAAABZxFdRXf8ArUBiK6iu818pNu7Em27sobkxm0ABQAAAoVKAAAAAAHqFSS4OxkQxr5q5igmDZQxUHzt4l5M056jNrg7E9K62wMCGMkuOvyL8MZF8dCYayAUjJPg7lSKAAAAAAAAAAAAAAB4qzSV2B5r1VFd/I18m27s9Tm27s8m5MZqhQ9FCigKlAAAAAACgKlAAAAAAAAAAAAJ9C/DEzXO/iWCoGbDGLmi9CtF8GaxGspYjFSUJunuJ2cqb3HJLdd4uUZPW7Wq/C9Nbkw1KgajD4iVr2lHudvo2ZEcbLha75JcX+upnF1ngoipFAAAAABswK1TefdyM9kU7Qs2ngMBUxlGKnKEqS3Z33Wp1Iweq1T94sStvYHLcr7a8LKyxWFq03+KnKNWPi092XomS/K9vMpxFlTxdNSf3ajdKV+lqlr+RtEiAi01dO6fBrVPzKgeQVKAUBUoAAAAAAUAAAAAAAAAAAqUAFQDmvaT2kxwylhcHJSxGsZ1FZqk+DUeTmuvBd70Qbfb3tAoYBeyglVxUl7tO/uw/NVa4L8q1fdxJJ2cYurWy2jiK8t6tV9pOcrJXvVnupJcEo2S7kfKXt5zqb85OUm2222229W23q33vVn0h2b5rWjg8PR3U4KEbaNSs9ePPiSwjoYAMNAAAAAAQztJwdbF5fVwlOFnPcabvxhUjPlw+EmZSSXMsHyFmeR4rDu1ajJd9m4vzRrZRTPrfNaVFp70Iy8Uc/wA52Wyes3v03Rk/vRWn9P8AouxHEcvzDEUHfD1qlJ3v/wAdScLvvUXZ+ZK8t7U84paSqwrLpVpxb/mhuv1ubnMeyebTng68asel0/K8eHmiGZpsvjsO/wDloSsvvJb0fVFR0TLe2xcMTg2vzUaif9E0v8iVZb2o5PV0dd0n0qwnH+pJx+Z88tFN0D6vwGZ4eut6hWp1V1p1IT/xZlWPkWCs1KOklwa0a8GuBvcu2yzShZUsZWsuUpe0XpUuNH04DhWX9sOZQ0rU6NVfuypy9Yu39JJ8v7ZsJKyr4arTfNwcKi+e6xo6cCLYDtDymrwxUYPpUjOFv4pLd+ZIcJjaNVXpVIVF1hOMl8mUZBQqUAAAAAAAAAAHJe1PtF3N7A4KfvaxrVIvh1pwa4d8lryXNqyC52ndpCp72DwU/f1jUqxfDk6dNrnyc1w4LW7jxScm3d8SkpNu74/rTuRdwmGnUnGnTV5ydkv1yINlstkU8XiI0l8Cs6kukeni9V/4fUWymUxp04tKyilGK8Fb5EM7OtlIYelGP3nrOXNvm/8AR1GlFJJLRIzasewAZUAAAAACkkVAGtxmFbI/jcnb5EyZblSTA5zVymcXvRumuDTafqj0sxxUdKijVj0mtbfvKz9bk8q4GLMDEZPF8gIDj8rynE/b0HRm/vJXV/3o6+qI3mfZPvJzwVdTj0upLwutV5nS8XkPcamrk84S3oNxkuDi2n6oupjima7J47D39pRlZfej7y+RqKlSTW7LlZK61VuXgfQqzPEx0qxjVj+ZWl/Mvrc1+PynKcVpVpeym+bWl+6cfqkX2HC6koPgrOy68UkuN/F8OZZsdTzfsmlb2mEqqUeV2mvKSIPmuy2Nw/2lKVuq1RcRpLHqFacXvRk0+vP1DR4Ylwb3AbbZnR+zxVW3Rzc16Vd6K9CR4DtgzCFlUVKovzU91v8AipyS/pOdyPDNzv6yX/fdHacB20Un9thWu+lVjL+moof3JHge1DKalt6pUpN8qlKenjKClH5nznEyaZd4+c/f8X+T3fUeB2gwNb7HFUZvpGpBv0vc2R8tUop8VckeR42tTaVOrUglyjUnFeidhZx8rft+f6H0EDm+C2kxkY39q5fvKMvm1c1W1e3eO/Z5U4OEHL3XOEZKaT0e67+67c1qYVc7Ve0Rw38DgZ+/rGvWi/g60qb/ABdZcuC1vbiplYhGKEekjrvZlsg4L9orR/5JcF+GP4fHr/0aDs52RdWccTVj7q1pxf8Am/p69DvWRZakk7aLgS1WdlWD3UbRFIqxUw0AAAAAAAAAAAAABbrV4R1nJK+iu+L6LqW8XiVBdW+C+pp68pSd3dt8eGnk/Esmpa2FTMqd93dk++2nqeXUoydno++xCM72zweGqujL2k6kfiUFdQb1s7ySctb6dbGdkGe4fG1JTpPSm7RhKym2461d297Wbiv4uqNziVNSOtlUJcLPwNTjNnl0Nki9DEzXO/jr/wBmfSuojLKa1KW9SlKD6xbV/Hr5nv8A/UrL3cRSjUXNpbk/O3uv0Jeq8HpKPpqWZ4GjU+Fpk94IJj9nspxejSpzfKS9m79z+F+pEM97Jasfew87rkpfR8zq+N2bT4I1iwGKofYzkl+HjH+V6F0xwDNtmsZQdqlKVuqTaNNNNOzVmfTMsyi1u4rD6c5QWnnCX0ZqMfsRlmM1pbu/3e7NfwPUssR8+RMqmdDzfsmrQbdGd1+F8V66kVxmzGMou06b+Zuc2+EY1A3eWcUamFGS4xa8jb5bxJZZ5glVD4SMbU/ZvxX9yTUn7pHs7ws6q3aau214cRJb4VBsSSbYnZGeImqtWLVJO6i18Xe/y93Pw47/AGe2EvJVK2ttUvury5+Z1PIsnStGKt9O8WZ5GTs9k6SUUtFx/wBEupwSVkeMNQUIqKLxztaAAQAAAAAAAAAAALWIrKEXJ/8Ar6F00GbY2LbcpJU6abbbslZe9JvoiyalWsRiklKrVkopaybdkkcv227RqlnTwbcIt23+FSXevwL5+HA1O2W11XGVfY4dS9ipWhFJ705cN9patvkuXiaytsHmTh7SVLv3d+G//Lf5cToiP08RUnKUnVSbbbck5Sbfnqy/has4tyUmkvvXa1/Sv5lrEYScXbcamuKaakvFPge6eOsrTi1YCT5Rt1mNHT2vtILlUvKy8+XgSfDdqVVNOrhouH3nCclLxSldeV/M5Vi6qbtBe7bVLS9xShFrWVRvpeKj/a4H0LkOavHUPbxju03KUVTvdvd0vNq3H8K0tx3r6bicLR0aVl5eCvwRBexy7wVaD4Ktw5K9OGnyOgU6CSsloBdwuNasm7xbtrxVzaTpRfFGilC8lFc5IkBjpYwMRldOXI0uN2Wi9Y8SUgyqFuljaOl/aQX3ai3vSXxL1KLMcPL3a9N033rfh6pXXmiaOKfExMRltKfGKNTqzwmIpX2YwdVb6hCUX96FmvVGtqbDYTkmvMk1bZlRlv0JyhLrFtX8evmWZSxdP7WmqsfxR92fy0fyPVx8b+pz7azeUejsXhlyb8zLw+Q0YfDBG4o4ulN2jPdl+Cot2V+ivo/Jl+dJriu5d76I138X33PJJjAoYPVJLV8F+uRJcDhFTjbnzZ4y/B7q3pfE/kuiM08fXWtSAAMqAAAAAAAAAAAAAMXMq+5TbXHgvFnEO0jaWdSostwt5Peiqu7xnUdt2iuttG++y5M7PtDR38POKm4Ss92aSbhKztKz0duhyPs62U9hVrYvEWdSM5QpNu9rq8693zlvWu9fi6m+Urc7GbI08FTVSpaWKkvelxUE/wD5w+sufhoXszzBybhTfi/ojc/sVfEe7TTjS5zejl3Lov7mbQ2ShFcdRevoSIBiMFvK04qS6SSfpfh5GkxmzFCXDehx0XvRfipe8/5jrlXZ3oazE5C+hnVcfxGyVSOtPdn4Pdl5qVl6NmlzHLa9Nb0qc4pPi4tL14HZMTlLXI0O0dBxwtbe4ezn/bT52LOkxs+w+m/2GrN/exEreCp0vq2dEqOxDeyHDuGVUm+M5VZ+TqSS+UUSytM0j3gbOqm+Cu/p9TdIjVCo/aWRIMO9DHXlYugAigAAAADGxOAo1FacE/I8YTLaVP4U9OF23bwvwMwAAAAAAAAAAAAAAAAAAAB5nBNWauma6jkOGjNzUNW72bur9bcDZgCiRUAAeZQT4o9ADDr5fCXIgHargFRy2tUXPcj/ADTiv7XOlkC7a6Ep5W1FO3tqbn3R97V9190s8lZOx9D2WX4Wn0oUr+MoqT+bZn1qhDdmdu8HKlRoVJONdRhT3VCUlKUUo3Tino7X14Epw0XXluw+BP3pcn+VdV3m7cZZmV0W3vPmSCnGyLWGw6irF85tAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWMbhY1YOnK9mrOxfAEQwnZ/hYVN9N+CUVfxaRKsNh4QiowVki6AAAAAAAAAAAAAAAAAAAAAAAAAAAA/9k="
        />
      </div>
      <div className="home__row">
        <Product
          id="12321346"
          title="LG US670H Series 50 Class 4K UHD Smart Hospitality LED TV (BH #LG50US670H9U • MFR #50US670H9UA) (4th Generation) comes with Netflix, Amazon Prime, Disk Player, Bluetooth and Free Wifi
         "
          price={598.99}
          rating={4}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTRmtdvTBEoVLO5BdDC5FJ4Cvzkf3_knscGQ&usqp=CAU"
        />
      </div>
    </div>
  );
}

export default Home;