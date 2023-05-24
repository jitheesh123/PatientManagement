import React from 'react';
import Modal from 'react-bootstrap/Modal';
const ContactView = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div className="card">
          <img
            className="card-image"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHEAAAB8CAMAAABpPq88AAABSlBMVEVRmeXuuYo7T1z////v7+9KMivu7u5vQTLy8vL7+/v19fX4+PjzvY35wpD2wI9Blunyuoa8r7RDLCdKluXVpXvPoHhjNSrYoXD58OkpAADhrYBeLybDlnBqOy7/UG9HLiZRoPFGJg98VkJTh8DZtp9vPirW1dRZmNsySFaofmBLQ035vYOhpr08JiOCXkijw+u30O80jeSRaE+3iWdAiNNrW2Nlb5KWu+mecFQ/MShwOyFqXnFPbZLP3/RVj81NY31MfK45SE14c3abjotcQz4zEwWJhIZKKRzIw8OYmJ2Gd3E9IRhuW1i4r6tLOzsoDw5eQTNsgJ1+r+lHT2Ph6vY4P1M7FxqNocdLJybItapvTEcaAABlaYIvLCB1PDm0Pk+RPkPcSmD1eHbyooP8bnVyNxDApJSpiXJUVVqttsBpdH0iN0aBi5VTYm0nJvt0AAALuUlEQVRogbWb+3fTxhKA15Ys62U59Ysi5GujENtq4pBIBdI0T3CIEwdwjS9NuRRuSyEkhP//1zu7kvVcvULunMNBWa3308zOzI6kFWJABI5lOQkf8SzL8vhAwk0CPmIXTSIccG53kRwJ47OndhMf6c4tuuMmcTE6i25CZHket3C9Z6OjozH3/JhnxB7/fyBCE2uf641fnJyOOpNJpzR6Njl6yr04O+rxNyNyLBcl2k2iCKgXz89GLzu1yQTTiExKpVFpMqlxbKj7gkiaRGd0IAogEliJl/CRCAdisIl3mhh+fPoSgzoOKiCT5wwvREcQ/COQczziQJxrAiHXhA+ca+I41jaCyL0YHVFZDvEk0B1ECowg4SZiBBRwDNswrisSu5MhpDHwYnFYai/sEVL9IhuROU3hgRydSnwmYharctNJGg8bdtoTaVblQ1aVsIhYFgdSqEnovUpVkEjnbo/xfifRD8T06BDHrzLxsNwdMywXiQ4wlD86Uu3eG2bTkMjRWPrunCONcgBLnRIkWAqRy0F85jpNjSJDLLVpqbboNDmV0nQkCQEWAYYkBIER7EQt4SY403PHqm2Z6yC6K/CHuWVYWlMtqFMP2YPLhRFYyR0UoAzOQBB7kHhQIA+G45ETThcqDrUKTRRZlgsFueHadfL0uzIAz3U8YCFBFGvo2oLLTIzqKO3+duwADSUJCEhtgZz8NierRSJRDOjozrQ42/zJ1nG4nqghQaodey6PX2/OWBgsRHQtiIJZifWykvhws953gGYqEOZS1m01X3br1YexWZOLiw5mF1URWj7ODASprBPk8R5C1f5cyJkBNqp1hNAOJtb0bEBA6tiwx8vwS1CTTySGcr00AwUR6r7GxE5GHhai4wH+LarOOJ5qVSkqwrxfJz/qYscZGllVdDz2vk1EdbAsZXTa+rhbt4EIvcSeo+bQUYbkc7zfdZD1XZGyPkYzwEbV4aE+GHW4lRKJQSUhE3RedxcDbG6IGXLOxiZyifeB2JBzEAtqyU8kyLSqwwdEe/dLtWkeHphVr3V+8ogYGbZqsDgV/EC0fD+X32CpGMMAEZBMoBrmQ/EYABJiPqMWZCtERJvgPvFVx24VhYg5jVooNMJEVMXuE5Nz5giFiDU9j6diUUthIkJzPlJ12Gu21K+HiYFVSpYVJWpj3OhvDfgqkXqf4yU7HPA8etEhzkJA8NWhthhMLqhNy7K0RtiKmkUKDxc6Pd4J61ifkdUqHI/CRjXUEeJx6AAU1dBL5y9rtfPSul8hef38/Lx0XhvphmpbQ1l38mpwKhlKBphvRjoC0RnYKJ1PdaiiNGPdCBDhb02zDH3aKW2RE4pJIaJNLqCjnQEiNgVix1k39NLUUisVqKKUStCVFFJbQaM1tf1a1o6Wo0TUF10i3Ang28lwYBDp/tt2Vb1mKmk+qyimjVSPKDqCXSXRTgOL6OCiNoWF/BmJf/VNpiKgYr7By4xinPQpV18VglUH/yRq0+raasOZtGx5x+lr3FldiyLrT4LxOKd0WVuVtfV8OY4Q1zV5dS2qwOY8QKS5jQxeUA6qkIlfxjEcTiYkKG2rkttJitvUf18tyM2WD2iVpyalHpBltaEWfI51rykXVn+PqlDfFdyqI5ptYBZ/WCoUmvc8RKM0GpWilbLS1CEudC9K1XvNQmHpB4oOM8bNAPMo0CY27rlJTTFao7ej83CQyNY58PTp+bp7Zfg3NCKqzxdE/gnNm0NE2QIdR6WQjnLzjdmQK5VCU1/UQw1sFyoRV+qk6mC56EmHSCy0kGnp5bkV8h3ZaNrXIFcW9o8nIiQ69x3RFE4jygXDbEYyjxx2X7kZT6xu8HZ0UPzGI8r+0TNERxKxPpMIkeY3LjFnmZNMBN8hxI0kYvN2iWBWJNCNClmVELXcRI0QKZmVmFWAqoPqqbg4IUSLukotEh7lchSLEKNZzhaBQTxtYSRKvlgqqC3a/X/TEwrRaKmFpT/iBt0FIn0aQUn0YEltmzSithAa0WypSw/oQ+KJhBqAPo3k9FqjrUcMKiuyjQQVZSUaMHq7QVmrFkPOGCTFngUb/LzdDq4WstI0tkwQq2ng/0yjGSph1fb2zzEmJSIgKel0v9wKuI6itVvtoLRaWqCH1Sr3E0ascijOcYh0y+WAWfVWeSFt96gV7FIud5OIuynERystLwfIJmBAKSy6odsHuMn0ujRbK48SiRvoYcI8ou7jbVBSdkcDzTT1DpalpSXy/x0N2tyrkkHF7cdJxPpDRCnifLK8Um6vO0gFVNRV/Y8fA7Ku6u1FDAGwXV6hFcge8QmKDw4ibwFZtv1RBfup2qtTxi/j/2gqGJZ4tNLEs/s2cTwgJjkWmPXdNvYNU4Xy32q3tyrq8Oh03HPlpPZKrWy12xbcDKjmPei7/a6bOOIshYj2VohjtkxjC/5rFCqlUuforiuTDtQhDdBsyzDbxH23E40KAZdGRI9W7GAg4+GlAT/t++WXX8i/UmmI6xD3fLm88ihlvHRZ/lT2RMZP+4Z/vv/w4X3nvx8+lP8c4qeEshebqSpmkO6v217UEwd5/9e/FvLXezuxuT2SgzGj9Fc8Ilm75L9d4j/YhxXDR9zLMGBqjwOfXe1A//gP4f390f7TZ9PE6Hd46UTk2bVt30iCZh8/fnQqx4rpqpjFbfoQH+ly5hrWqQnkhmEadpkHa74LfJt++fVZSpZzruutDwlrpGzgNatlwFHBB1zJYC/IOVmIJNm5a5NhmTalZVqGng+IiYlrhyf+GGm1I0fgNBlMiokbyeujJ7BueVESlZVP7zINk4OIuujdpzjmyqezvW62YaAGkCiPVWJk73HZZ0bPytu/HmQeA+ocJnNn0POztqX7Jw8ctmxan7s5xuBRzG0HXT6rDbVpbekOUDctrdFQcxDrMxGJcTU5rf/nBha10SC3AA1H8hChJmd3cxAfFBouxxX1QY4R5kDkM3cHIr7fCuLgPioHEd9bcWK2rGMTF6W+Lc5f2Yn44Rzic0ykSwxKDuIGg592Shm6drt9LDFEcq7bzTDO3H7amWzWLlo+2PlyeLi0urq6RCXiM6vG4bedgz2UiIXYsJ+uJCS6bv9gv0jkCxXminIxgE6Hxf2Dfjy0uus8zxHisn53bwcGcSQL0YbG5tj+4h2r8JCu5N5+0ZNB8nMW+czXd59eX1UfCs7TTjb89si+oJ2iXwanSc/m5cYg0HuHajb32SNLC8mDYkgSlZSfDkLdDyIj4mB0idEHZTuHYWKxqMYiKxdhYPFwP0KcM753rCEl96I4UPKLGmNYJQrEErwhqD/h/e9YA+8CussUBQnzokJRs6KeUYHFw+Wub9TqnPG/Y+V97hoLxGpqobdIcqVwOqADAXngIfED5MA7Vj4LEDOLF82lCn7lKCtKpaJqZ7G8kJbhd6ze47lEIGYOimenFxfaxcXF6ZdBEg8jF5G5uRt8j8zyvORUH/1kngN1JENfOzDtNw/2PHrvWG3ifvogucQJEp7yjtV+sbOTPkZO2cFusyvQdln8CEG5lzKJNxCYyuqTmF0W/Kx+2zbFso8n0bfLguy3JGlAFOcHt68ijkqejC6K/neszh6kXhbvyyuDHp+ws2t8+8hBT0ra2SXcOvLrmEnc2cWKl7eLHIwjO7uCm70F4XYN+3UshPenB/d2crc8l4OxFNllTNvb2SveDnNQ7AnZ9nby3NVtIAdXbNzeTteqzscEHM9ffz9ycM1Q92670RHa/TnOtBQl8MBn/N9rpO+0ZLirr98B/HrFB/Z2ZtlrzQrjGzvQoDi+0RclvLh2I9MOvq4JzM2+KBEZ7jo3czC45oTAFyWSGNyhl/jtAy/2rnPZFvPSvn1I3N0NpyTu5FtGRQeDbydcaJby7ifHTdB7fFVMhUKHq0te4tOJmb7TYbjL62J8tQhnvl1fsrh/ni9Kggehz0Dg52Lv8qoYKlOdP68veyIjhL5EufkXJd4nIqIgcb3Ly5PrbzZv/+r6+hLDnJkIdfeiI7C3839tebkVI6inRgAAAABJRU5ErkJggg=="
          />
          <div className="card-content">
            <h2 className="card-title">{props?.viewdetails?.Name}</h2>
            <p className="card-text">
              <strong>Email:</strong> {props?.viewdetails?.Email}
            </p>
            <p className="card-text">
              <strong>Message:</strong> {props?.viewdetails?.Message}
            </p>
            <p className="card-text">
              <strong>Status:</strong> {props?.viewdetails?.status}
            </p>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ContactView;
