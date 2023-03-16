# OAL-Product-Card

Este es un paquete de prueba de despligue en NPM

### Oscar Alcázar

### Ejemplo

```
import { ProductCard, ProductImage, ProductTitle, ProductButton } from 'oal-product-card'
```

```
<ProductCard key={ product.id } product={ product } initialValues={{ counter: 4, maxCounter: 10 }} >
    {
        ({ counter, maxCounter, isMaxCounterReached, reset, increaseBy }) => (
            <>
                <ProductImage />
                <ProductTitle />
                <ProductButton />
            </>
        )
    }
</ProductCard>
```