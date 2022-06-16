import { Disclosure } from "@headlessui/react";

export default function FAQ() {
  return (
    <div>
      <h1 className="text-2xl text-center mb-10 tracking-widest">FAQ'S</h1>
      <div className="flex flex-col text-center">
        <Disclosure>
          <Disclosure.Button className="py-2">
            <h1 className="font-bold">“How To Buy”</h1>
          </Disclosure.Button>
          <Disclosure.Panel className="max-w-sm text-gray-500">
            Izabrali ste zeljenu igru idete na checkout. Opcije placanja su
            placanje iskljucivo preko paypala ili visa devizne kartice.
            Potrudicemo se da u sto kracem mogucem roku uvedemo placanje preko
            crypto valuta pa cak i placanje preko uplatnice za ljude koji nemaju
            ni paypal ni visa karticu. Kada unesete sve potrebne podatke od vase
            kartice idete next i fakticki ste kupili zeljeni account sa igricom.
            Prelazite na sledeci stepen a to je HOW TO ACTIVATE!
          </Disclosure.Panel>
        </Disclosure>
        <Disclosure>
          <Disclosure.Button className="py-2">
            <h1 className="font-bold">“How To Activate Game”</h1>
          </Disclosure.Button>
          <Disclosure.Panel className="max-w-sm text-gray-500">
            Nakon sto kupite igricu sa naseg sajta, na mail vam u roku od dva
            sata stize full access account, full access znaci da mozete da
            menjate sifru, gmail ime i sve ostale potrebne podatke. Account smo
            mi pravili, tako da dajemo dozivotnu garanciju na njega. Trudimo se
            da svaki nas kupac bude maksimalno ispostovan i zadovoljan. Ukoliko
            imate nekih problema pisite support-u i oni ce se potruditi da rese
            problem u sto kracem mogucem roku Hvala vam sto kupujete na ipgames
          </Disclosure.Panel>
        </Disclosure>
      </div>
    </div>
  );
}
