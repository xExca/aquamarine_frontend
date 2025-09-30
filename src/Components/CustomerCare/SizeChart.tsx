const SizeChart = () => {
  return (
    <div className="px-12">
          <div className="mt-10 sm:mt-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[color:var(--olive)]">
              Find your fit
            </h2>
            <p className="mt-2 text-[16px] leading-relaxed text-[color:var(--olive)]/80">
              The right fit is key to feeling confident. Some styles may run smaller or larger — check individual product descriptions
            </p>

            <div>
              <div className="mt-6 space-y-2">
                <div className="grid gap-4 sm:grid-cols-3 text-[color:var(--olive)]">
                  <div className="flex gap-3">
                    <img
                      src="assets/swimsuit/white_robe.jpg"
                      alt="Bust"
                      className="h-[60px] w-[60px] rounded-md object-cover shrink-0"
                    />
                    <div>
                      <p className="text-sm font-semibold">1. BUST</p>
                      <p className="text-sm text-[color:var(--olive)]/80">
                        Measure from the fullest part of your bust; this should be above the bra band.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <img
                      src="assets/swimsuit/white_robe.jpg"
                      alt="Waist"
                      className="h-[60px] w-[60px] rounded-md object-cover shrink-0"
                    />
                    <div>
                      <p className="text-sm font-semibold">2. WAIST</p>
                      <p className="text-sm text-[color:var(--olive)]/80">
                        Place tape just above your navel and wrap it around your body.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <img
                      src="assets/swimsuit/white_robe.jpg"
                      alt="Hips"
                      className="h-[60px] w-[60px] rounded-md object-cover shrink-0"
                    />
                    <div>
                      <p className="text-sm font-semibold">3. HIPS</p>
                      <p className="text-sm text-[color:var(--olive)]/80">
                        Take this measurement from the widest point of your hips.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-[color:var(--olive)]">Bikini Measurements</p>
                  <span className="text-xs text-[color:var(--olive)]/70">IN</span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-[color:var(--olive)] border border-[color:var(--olive)]/20 border-separate border-spacing-0">
                    <thead className="bg-[#545333]/15 [&>tr]:divide-x [&>tr]:divide-[color:var(--olive)]/20">
                      <tr className="text-left [&>th]:px-3 [&>th]:py-2">
                        <th>Size</th>
                        <th>Bust</th>
                        <th>Waist</th>
                        <th>Hips</th>
                        <th>Cup Size</th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-[color:var(--olive)]/20 [&>tr]:divide-x [&>tr]:divide-[color:var(--olive)]/20">
                      <tr className="[&>td]:px-3 [&>td]:py-2"><td>XS</td><td>31—33</td><td>23—25</td><td>33—35</td><td>A—B</td></tr>
                      <tr className="[&>td]:px-3 [&>td]:py-2"><td>S</td><td>33—35</td><td>25—27</td><td>35—37</td><td>A—B</td></tr>
                      <tr className="[&>td]:px-3 [&>td]:py-2"><td>M</td><td>35—37</td><td>27—29</td><td>37—39</td><td>B—C</td></tr>
                      <tr className="[&>td]:px-3 [&>td]:py-2"><td>L</td><td>37—39</td><td>29—31</td><td>39—41</td><td>C—D</td></tr>
                      <tr className="[&>td]:px-3 [&>td]:py-2"><td>XL</td><td>39—42</td><td>31—34</td><td>41—44</td><td>D—DD</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default SizeChart