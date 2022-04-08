<template>
    <div class="calculator">
        <Display value="1000" />
        <Button label="AC" triple />
        <Button label="/" operation />
        <Button label="7" />
        <Button label="8" />
        <Button label="9" />
        <Button label="*" operation />
        <Button label="4" />
        <Button label="5" />
        <Button label="6" />
        <Button label="-" operation />
        <Button label="1" />
        <Button label="2" />
        <Button label="3" />
        <Button label="+" operation />
        <Button label="0" double />
        <Button label="." />
        <Button label="=" operation />
    </div>
</template>

<script>
import Display from "../components/Display"
import Button from "../components/Button"

//para usar os componentes importados é preciso registrá-los dentro do export default
export default { 
    components: { Button, Display }
}
</script>

<style>
.calculator{
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: 1fr repeat(5, 48px);
    border-radius: 5px;
    display: grid;
    overflow: hidden;
    height: 320px;
    width: 235px;
}
</style>