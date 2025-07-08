

const Impressum = () => {
  return (
    <section className="w-full min-h-[60vh] flex items-center justify-center">
      <div className="bg-[#181a20] rounded-lg shadow-lg p-8 w-full max-w-2xl border border-gray-700">
        <h1 className="mb-8 text-4xl font-bold text-center text-designColor">Impressum</h1>
        <div className="space-y-4 text-base leading-relaxed text-gray-300">
          <div>
            <span className="text-lg font-semibold">Imprint</span><br />
            Information according to §5 DDG<br />
            Adrian Günzel
          </div>
          <div>
            <span className="italic">c/o IP-Management #4871</span><br />
            Ludwig-Erhard-Straße 18<br />
            20459 Hamburg
          </div>
          <div>
            <span className="font-semibold">Alternative mailing address:</span><br />
            Ludwig-Erhard-Str. 18, c/o IP-Management #4871, 20459, Hamburg
          </div>
          <div>
            <span className="font-semibold">Contact details:</span><br />
            E-mail: <a href="mailto:a.guenzel83@gmail.com" className="underline text-designColor">a.guenzel83@gmail.com</a><br />
            Phone: 016091341618
          </div>
          <div>
            <span className="text-sm italic">Source: Impressum-Privatschutz</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impressum;
